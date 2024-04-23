import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const bcrypt = require('bcrypt');
const SALT = 10;
async function hashPassword(password: string): Promise<string> {
    let hashedPass: string;

    try {
        hashedPass = await bcrypt.hash(password, 10);
    } catch (err) {
        console.error('Error hashing password:', err);
        throw err;
    }

    return hashedPass;
}



async function main() {
    // ... you will write your Prisma Client queries here
    try {
        // Create the events using Prisma Client
        await prisma.users.create({
            data: {
                id: '3a170de6-05d4-4610-8951-c4b8a3aa0fd5',
                name: 'Test',
                email: 'test@test.com',
                password: 'test123',
                events: undefined,
                profile: undefined,
            },
        })

    } catch (error) {
        console.error('Error creating events:', error);
    }
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