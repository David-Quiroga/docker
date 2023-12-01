import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityWallet } from './entities/wallet.entity';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreateWalletDto } from './dto/create-wallet.dto';

@Module({
  controllers: [WalletController],
  providers: [WalletService],
  imports: [
    TypeOrmModule.forFeature([EntityWallet])
  ]
})
export class WalletModule {

}
