const Footer = () => {
  return (
    <footer className="bg-accent w-full p-8 text-center">
      <p className="text-xs font-medium">© 2025 BEWEAR. Todos os direitos reservados.</p>
      <p className="text-xs font-medium text-muted-foreground">
        Desenvolvido por{' '}
        <a
          href="https://www.linkedin.com/in/yudi-yamada-0a10181b9/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary transition-colors"
        >
        Yudi Yamada
        </a>
      </p>
    </footer>
  );
};

export default Footer;