import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export const SignupCard = () => {

    const [signupform, setSignupForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
    });
    return (
    <Card className='w-full h-full'>
        <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Sign Up To Access Your Account</CardDescription>
        </CardHeader>
        <CardContent>
            <form className='space-y-5'>
                <Input Placeholder="Your Username"
                       required
                       onChange={(e) => setSignupForm({...signupform, username: e.target.value})}
                       value={signupform.username}
                       type="text"
                       disabled={false}
                />
                <Input Placeholder="Email"
                       required
                       onChange={(e) => setSignupForm({...signupform, email: e.target.value})}
                       value={signupform.email}
                       type="email"
                       disabled={false}
                />
                <Input Placeholder="Password"
                       required
                       onChange={(e) => setSignupForm({...signupform, password: e.target.value})}
                       value={signupform.password}
                       type="password"
                       disabled={false}
                />
                <Input Placeholder="confirmPassword"
                       required
                       onChange={(e) => setSignupForm({...signupform, confirmPassword: e.target.value})}
                       value={signupform.confirmPassword}
                       type="password"
                       disabled={false}
                />

                <Button
                disabled={false}
                size="lg"
                type='submit'
                className='w-full'
                >
                    Continue
                </Button>

            </form>
                <Separator className='my-5'>
                    
                    <p className='text-s to-muted-foreground mt-2 absolute'>Already have an account? <span className='text-sky-600 hover:underline cursor-pointer'>Sign In</span></p>
                </Separator>
        </CardContent>
    </Card>
    );
};