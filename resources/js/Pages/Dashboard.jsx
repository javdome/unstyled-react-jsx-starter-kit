import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2>Dashboard</h2>
            }
        >
            <Head title="Dashboard" />

            <div>
                You're logged in!
            </div>

        </AuthenticatedLayout>
    );
}
