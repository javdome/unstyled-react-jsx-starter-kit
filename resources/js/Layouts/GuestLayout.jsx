import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <>
            <div>
                <Link href="/">
                    {/* <ApplicationLogo /> */}
                    Home
                </Link>
            </div>

            <div>
                {children}
            </div>
        </>
    );
}
