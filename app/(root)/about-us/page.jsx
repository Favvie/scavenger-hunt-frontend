import SubHeadingCenter from '@/components/SubHeadingCenter';
import TextWithIcon from '@/components/TextWithIcon';
import TargetAudienceCard from '@/components/TargetAudienceCard';
import EcosystemCard from '@/components/EcosystemCard';

const purposeAndGoals = [
    {
        icon: '/images/textWithIcon.png',
        heading: 'Educate users about blockchain technologies in an interactive way.'
    },
    {
        icon: '/images/textWithIcon.png',
        heading: 'Reward players with NFTs for completing challenges',
    },
    {
        icon: '/images/textWithIcon.png',
        heading: 'Create a multi-ecosystem educational hub for learning Web3 concepts',
    }
];

const approach = [
    {
        icon: '/images/textWithIcon.png',
        heading: 'Gameplay & Learning Experience',
        text: 'Gain knowledge in different blockchain eco system by learning while solving puzzles, games and other challenges.'
    },
    {
        icon: '/images/textWithIcon.png',
        heading: 'Reward & Progression',
        text: 'Earn unique NFT’s for completing challenges. Unlock rewards baseed on your progess as you climb up the leaderboard.'
    },
    {
        icon: '/images/textWithIcon.png',
        heading: 'Blockchain & Wallet Integration',
        text: 'Easily and securely connect your wallet.',
    }
];

const targetAudience = [
    {
        icon: '/images/bitcoin.png',
        title: 'Blockchain Enthusiasts & Learners',
        description: 'People who want to understand different blockchain ecosystems'
    },
    {
        icon: '/images/videogame.png',
        title: 'Gamers & Puzzle Solvers',
        description: 'Those who enjoy interactive and challenging experiences'
    },
    {
        icon: '/images/pair.png',
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
        logo: '/images/steller.png'
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
                    <h1 className='mb-0text-[28px] font-[600] font-orbitron text-[#E9E9E9] md:text-[56px]'>About</h1>
                    <h2 className='mb-6 text-[28px] font-orbitron font-[600] text-transparent bg-clip-text bg-gradient-to-r from-[#7D3EAF] to-[#E7499F] md:text-[56px]'>Scavenger hunt</h2>
                    <p className='mx-auto max-w-3xl text-[#E9E9E9] font-spaceGrotesk text-[15px] '>
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
