import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2>
                    Update Password
                </h2>

                <p>
                    Ensure your account is using a long, random password to stay
                    secure.
                </p>
            </header>

            <form onSubmit={updatePassword}>
                <div>
                    <label htmlFor="current_password">Current Password</label>

                    <input
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        type="password"
                        autoComplete="current-password"
                    />

                    {errors.current_password && <p>{errors.current_password}</p>}
                </div>

                <div>
                    <label htmlFor="update_password">New Password</label>

                    <input
                        id="update_password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        autoComplete="new-password"
                    />

                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div>
                    <label htmlFor="password_confirmation">Confirm Password</label>

                    <input
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        type="password"
                        autoComplete="new-password"
                    />

                    {errors.password_confirmation && <p>{errors.password_confirmation}</p>}
                </div>

                <div>
                    <button disabled={processing}>Save</button>

                    {recentlySuccessful && (<p>Saved.</p>)}
                </div>
            </form>
        </section>
    );
}
