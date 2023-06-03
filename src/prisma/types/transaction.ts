import { PrismaService } from '../prisma.service';

/**
 * Interface of transaction instance
 */
export type transaction = Omit<PrismaService, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>;
