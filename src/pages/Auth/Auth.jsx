import { SignupCard } from '@/components/organisms/Auth/SignupCard';




export const Auth = () => {
    return (
        <>
        <div className="h-[100vh] flex justify-center items-center bg-[#5c3858]">
            <div className="md:h-auto md:w-[420px]">
                <SignupCard/>                
            </div>
        </div>
        </>
    );
};
