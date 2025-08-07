const Footer = () => {
  return (
    <div className="bg-accent w-full gap-1 p-8 flex flex-col items-center justify-center text-center">
      <p className="text-xs font-medium">© 2025 Copyright BEWEAR</p>
      <p className="text-muted-foreground text-xs font-medium">
        Todos os direitos reservados.
      </p>
      <p className="text-muted-foreground text-xs font-medium">
        Feito por{" "}
        <a
          href="https://www.linkedin.com/in/yudi-yamada-0a10181b9/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary transition-colors"
        >
          Yudi Yamada
        </a>
      </p>
    </div>
  );
};

export default Footer;