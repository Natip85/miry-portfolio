export default function Footer() {
  return (
    <footer className="flex-grow-0">
      <div className="max-w-7xl flex items-center justify-center mx-auto p-4">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} by Miry Livnat.
        </p>
      </div>
    </footer>
  );
}
