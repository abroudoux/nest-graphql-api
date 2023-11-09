import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { UserModule } from 'src/user/user.module';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';


@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            playground: true,
            driver: ApolloDriver,
        }),
        UserModule,
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url:'mongodb+srv://<admin>:rIgIz4503AOipyBw@chnirt-graphql-apollo-vg0hq.mongodb.net/nest?retryWrites=true&w=majority',
            entities: [join(__dirname, '**/**.entity{.ts,.js}')],
            synchronize: true,
            useNewUrlParser: true,
            logging: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {};
