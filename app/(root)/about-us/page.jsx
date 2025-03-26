import { Users, Gamepad2, Code2, BookOpen, Trophy, Wallet } from 'lucide-react';
import SubHeadingCenter from '@/components/SubHeadingCenter';
import TextWithIcon from '@/components/TextWithIcon';
import TargetAudienceCard from '@/components/TargetAudienceCard';
import EcosystemCard from '@/components/EcosystemCard';

const purposeAndGoals = [
    {
        icon: BookOpen,
        heading: 'Educate users about blockchain technologies in an interactive way',
        text: 'Learn through hands-on experience with various blockchain ecosystems'
    },
    {
        icon: Trophy,
        heading: 'Reward players with NFTs for completing challenges',
        text: 'Earn unique digital collectibles as you progress'
    },
    {
        icon: Code2,
        heading: 'Create a multi-ecosystem educational hub for learning Web3 concepts',
        text: 'Access comprehensive resources across different blockchain platforms'
    }
];

const approach = [
    {
        icon: Gamepad2,
        heading: 'Gameplay & Learning Experience',
        text: 'Gain knowledge in different blockchain ecosystems by solving puzzles, games and other challenges'
    },
    {
        icon: Trophy,
        heading: 'Reward & Progression',
        text: 'Earn unique NFTs for completing challenges. Unlock rewards based on your progress as you level up the leaderboards'
    },
    {
        icon: Wallet,
        heading: 'Blockchain & Wallet Integration',
        text: 'Setup and securing personal your wallet'
    }
];

const targetAudience = [
    {
        icon: BookOpen,
        title: 'Blockchain Enthusiasts & Learners',
        description: 'People who want to understand different blockchain ecosystems'
    },
    {
        icon: Gamepad2,
        title: 'Gamers & Puzzle Solvers',
        description: 'Those who enjoy interactive and challenging experiences'
    },
    {
        icon: Code2,
        title: 'Developers & Crypto Users',
        description: 'Technical users looking to expand their blockchain knowledge'
    }
];

const ecosystems = [
    {
        title: 'StarkNet',
        description: 'Step into the future of Ethereum scaling through our interactive challenges and discover how to build, transact, and innovate on this groundbreaking platform.',
        logo: '/images/starknet.png'
    },
    {
        title: 'Stellar',
        description: 'Step into the future of Ethereum scaling through our interactive challenges and discover how to build, transact, and innovate on this groundbreaking platform.',
        logo: '/images/stellar.png'
    },
    {
        title: 'Worldcoin',
        description: 'Step into the future of Ethereum scaling through our interactive challenges and discover how to build, transact, and innovate on this groundbreaking platform.',
        logo: '/images/worldcoin.png'
    },
    {
        title: 'Web3',
        description: 'Step into the future of Ethereum scaling through our interactive challenges and discover how to build, transact, and innovate on this groundbreaking platform.',
        logo: '/images/web3.png'
    }
];

const AboutUs = () => {
    return (
        <div className='px-4 py-40 min-h-screen bg-[#060B1C] md:px-8 lg:px-12'>
            <div className='mx-auto max-w-7xl'>
                <div className='mb-12 text-center'>
                    <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl'>About</h1>
                    <h2 className='mb-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 md:text-4xl'>Scavenger hunt</h2>
                    <p className='mx-auto max-w-3xl text-gray-400'>
                        NFT Scavenger Hunt is an interactive, educational blockchain-based game that helps users learn about
                        various blockchain ecosystems (e.g., StarkNet, Stellar, Worldcoin, Web3, Smart Contracts, etc.) through
                        engaging challenges. Players earn NFT rewards by solving puzzles, quizzes, and interactive tasks.
                    </p>
                </div>

                <section className='mb-16'>
                    <SubHeadingCenter text='Our Purpose & Goals' />
                    <div className='space-y-6'>
                        {purposeAndGoals.map((item, index) => (
                            <TextWithIcon
                                key={index}
                                icon={item.icon}
                                heading={item.heading}
                                text={item.text}
                            />
                        ))}
                    </div>
                </section>

                <section className='mb-16'>
                    <SubHeadingCenter text='Our Approach' />
                    <div className='space-y-6'>
                        {approach.map((item, index) => (
                            <TextWithIcon
                                key={index}
                                icon={item.icon}
                                heading={item.heading}
                                text={item.text}
                            />
                        ))}
                    </div>
                </section>

                <section className='mb-16'>
                    <SubHeadingCenter text='Our Target Audience' />
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {targetAudience.map((item, index) => (
                            <TargetAudienceCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </section>

                <section className='mb-16'>
                    <SubHeadingCenter text='Our Supported Ecosystems' />
                    <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                        {ecosystems.map((ecosystem, index) => (
                            <EcosystemCard
                                key={index}
                                title={ecosystem.title}
                                description={ecosystem.description}
                                logo={ecosystem.logo}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
