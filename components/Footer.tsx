export default function Footer() {
  return (
    <footer className="px-12 py-16 flex justify-between items-center border-t-2 border-red/30 max-sm:flex-col max-sm:gap-6 max-sm:text-center">
      <span className="font-playfair text-[0.85rem] font-semibold tracking-[0.15em] uppercase">
        Little Menace Hi-Fi
      </span>
      <ul className="flex gap-8 list-none">
        <li>
          <a
            href="mailto:hello@littlemenacehifi.com"
            className="text-[0.75rem] text-warm-gray hover:text-red transition-colors duration-300 tracking-[0.05em] no-underline"
          >
            hello@littlemenacehifi.com
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/littlemenacehifi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.75rem] text-warm-gray hover:text-red transition-colors duration-300 tracking-[0.05em] no-underline"
          >
            Instagram
          </a>
        </li>
      </ul>
      <span className="text-[0.75rem] text-warm-gray-light tracking-[0.05em]">
        &copy; 2026 Little Menace Hi-Fi. West Loop, Chicago.
      </span>
    </footer>
  );
}
