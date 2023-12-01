import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntityWallet } from './entities/wallet.entity';
import { PaginacionDto } from 'src/common/common.module';


@Injectable()
export class WalletService {
  constructor(@InjectRepository(EntityWallet)
  private readonly walletRepository: Repository<EntityWallet>,) { }

  async create(createWalletDto: CreateWalletDto) {
    try {
      const wallet = this.walletRepository.create(createWalletDto);
      await this.walletRepository.save(wallet)
      return wallet
    } catch (error) {
      console.log(error)
      throw new Error("No se puedo realizar el ingreso")
    }
  }

  findAll(paginacionDto: PaginacionDto) {
    const { limit = 10, offset = 1 } = paginacionDto;
    return this, this.walletRepository.find({
      take: limit,
      skip: offset
    })
  }

  async findOne(id: number) {
    const wallet = this.walletRepository.findOneBy({ id });
    if (!wallet)
      throw new NotFoundException(id)
    return wallet
  }

  async update(id: number, updateWalletDto: UpdateWalletDto) {
    const wallet = await this.walletRepository.preload({
      id: id,
      ...updateWalletDto
    })
    if (!wallet)
      throw new NotFoundException("No se elimino");
    await this.walletRepository.save(wallet)
    return wallet
  }

  async remove(id: number) {
    const wallet = await this.findOne(id);
    this, this.walletRepository.delete(wallet)
  }
}
