import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWalletDto } from './dto/create-wallet.dto';

@Module({
  controllers: [WalletController],
  providers: [WalletService],
})
export class WalletModule {
  constructor(
    @InjectRepository(CreateWalletDto)
    private readonly walletRepository:Repository<CreateWalletDto>
){}
async create(CreateWalletDto: CreateWalletDto){
  const wallet = this.walletRepository.create(CreateWalletDto)
  await this.walletRepository.save(wallet)
  return wallet;
}
}
