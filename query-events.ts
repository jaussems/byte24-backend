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

const events = [
    {
        id:'8e82c2a6-9d00-4f4b-8ace-74abbe17f0f8',
        name: 'Outdoor Painting Workshop',
        description: 'A 2-hour workshop for beginners looking to learn the basics of painting landscapes in a beautiful outdoor setting.',
        location: 'City Park',
        date: '2023-05-15',
        time: '10:00 AM',
        published: true,
    },
    {
        id: 'c1ac2f8f-05c7-4f77-a6d4-7140f1bab61e',
        name: 'Chess Tournament',
        description: 'A day-long chess tournament for players of all skill levels, with prizes for the top finishers.',
        location: 'Community Center',
        date: '2023-06-01',
        time: '9:00 AM',
        published: true,
    },
    {
        id: '58c8d9bc-22d2-4fd9-a0e9-b7745eda37c6',
        name: 'Yoga in the Park',
        description: 'A free, weekly, outdoor yoga class suitable for all levels.',
        location: 'Central Park',
        date: 'Every Sunday',
        time: '8:00 AM',
        published: true,
    },
    {
        id: 'b39c2762-c5f4-4319-a7eb-2aef9da69caa',
        name: 'Gardening Club Meeting',
        description: 'A monthly gathering for gardening enthusiasts to share tips, ideas, and connect with fellow gardeners.',
        location: 'Botanical Garden',
        date: 'First Monday of every month',
        time: '6:00 PM',
        published: true,
    }
];

async function main() {
    // ... you will write your Prisma Client queries here
    try {
        // Create the events using Prisma Client
        const createdEvents = await prisma.events.createMany({
            data: events
        });

        console.log('Events created:', createdEvents);
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