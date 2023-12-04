import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query']
});

//@ts-ignore
prisma.$on('query', (e: any) => {
    console.log('Query: ', e.query, e.params);
})

async function main() {
    const result = await prisma.testModel.create({
        data: {
            value: 0.10739236971565864
        }
    });
    console.log('Value: ', result.value);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })