import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthSimpleLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { request } from '@/routes/password';
import { Form, Head, Link } from '@inertiajs/react';
import { LoaderCircle, Globe } from 'lucide-react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;

}

export default function Login({ status, canResetPassword }: LoginProps) {

    // Handler for Google OAuth
    const handleGoogleLogin = () => {
        // Redirect to Laravel backend Google redirect route
        window.location.href = `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'}/auth/google/redirect`;
    };

    return (
        <AuthSimpleLayout
            title="Welcome Back"
            description="Sign in to continue to your dashboard"
        >
            <Head title="Log in" />

            <div className="w-full max-w-md bg-white dark:bg-gray-50 shadow-lg rounded-2xl p-8 md:p-10 text-black dark:text-gray-900">
                {status && (
                    <div className="mb-4 text-center text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <Form
                    {...AuthenticatedSessionController.store.form()}
                    resetOnSuccess={['password']}
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            {/* Email */}
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-black dark:text-gray-900">
                                        Email address
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="email@example.com"
                                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg text-black"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                {/* Password */}
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password" className="text-black dark:text-gray-900">
                                            Password
                                        </Label>
                                        {canResetPassword && (
                                            <TextLink
                                                href={request()}
                                                className="ml-auto text-sm hover:underline"
                                                tabIndex={5}
                                            >
                                                Forgot password?
                                            </TextLink>
                                        )}
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="Enter your password"
                                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg text-black"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                {/* Remember me */}
                                <div className="flex items-center space-x-3">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        tabIndex={3}
                                    />
                                    <Label htmlFor="remember" className="text-black dark:text-gray-900">
                                        Remember me
                                    </Label>
                                </div>

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2"
                                    tabIndex={4}
                                    disabled={processing}
                                    data-test="login-button"
                                >
                                    {processing && (
                                        <LoaderCircle className="h-4 w-4 animate-spin" />
                                    )}
                                    Log in
                                </Button>

                                {/* Continue with Google */}
                                <Button
                                    type="button"
                                    onClick={handleGoogleLogin}
                                    className="mt-2 w-full border border-gray-300 hover:bg-gray-100 text-black rounded-lg flex items-center justify-center gap-2"
                                    tabIndex={6}
                                >
                                    <Globe className="h-5 w-5" />
                                    Continue with Google
                                </Button>
                            </div>
                        </>
                    )}
                </Form>

                {/* Signup link */}
                <div className="mt-6 text-center text-sm text-black dark:text-gray-900">
                    Don't have an account?{' '}
                    <TextLink href={register()} className="hover:underline" tabIndex={5}>
                        Sign up
                    </TextLink>
                </div>
            </div>
        </AuthSimpleLayout>
    );
}
