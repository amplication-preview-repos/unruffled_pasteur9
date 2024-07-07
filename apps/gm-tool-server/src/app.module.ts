import { Module } from "@nestjs/common";
import { StatModule } from "./stat/stat.module";
import { LocationModule } from "./location/location.module";
import { ItemModule } from "./item/item.module";
import { NpcModule } from "./npc/npc.module";
import { CampaignModule } from "./campaign/campaign.module";
import { QuestModule } from "./quest/quest.module";
import { TemplateModule } from "./template/template.module";
import { UserFieldModule } from "./userField/userField.module";
import { ContainerModule } from "./container/container.module";
import { PropertyModule } from "./property/property.module";
import { PropertyGroupModule } from "./propertyGroup/propertyGroup.module";
import { CategoryModule } from "./category/category.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    StatModule,
    LocationModule,
    ItemModule,
    NpcModule,
    CampaignModule,
    QuestModule,
    TemplateModule,
    UserFieldModule,
    ContainerModule,
    PropertyModule,
    PropertyGroupModule,
    CategoryModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
