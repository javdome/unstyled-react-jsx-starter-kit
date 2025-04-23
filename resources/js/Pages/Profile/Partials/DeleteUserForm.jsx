import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function DeleteUserForm({ className = '' }) {

    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const deleteUser = (e) => {
        e.preventDefault();

        const isConfirmed = window.confirm("Are you sure you want to delete your account?");

        if (isConfirmed) {
            destroy(route('profile.destroy'), {
                preserveScroll: true,
                onSuccess: () => clearErrors(),
                onError: () => passwordInput.current.focus(),
                onFinish: () => reset(),
            });
        }
    };


    return (
        <section className={className}>
            <header>
                <h2>
                    Delete Account
                </h2>

                <p>
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>

            <form onSubmit={deleteUser}>
                <div>
                    <label htmlFor="password">Password</label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) =>
                            setData('password', e.target.value)
                        }
                        placeholder="Password"
                    />

                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div>
                    <button disabled={processing}>
                        Delete Account
                    </button>
                </div>
            </form>
        </section>
    );
}
