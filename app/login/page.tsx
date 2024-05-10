import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="techcards flex h-screen items-center justify-center">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 rounded-lg border p-4 shadow-lg ">
        <div className="h-max w-full rounded-lg border bg-gray-50 p-4">
          <div className="flex flex-col gap-4">
            <AcmeLogo />
            <div>To try out, use the following credentials:</div>
            <div>
              <strong>email: </strong>rohit@invoicy.com.au
            </div>{' '}
            <div>
              {' '}
              <strong>pswd: </strong> save_climate
            </div>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
