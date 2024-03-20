import { navLinkss } from "../../utils/contants";

function FooterLinks() {
  return (
    <>
      {navLinkss.map((e) => {
        return (
          <a
            key={e.id}
            href={e.link}
            className="duration-300 hover:text-bg lg:text-lg"
          >
            {e.name}
          </a>
        );
      })}
    </>
  );
}

export default FooterLinks;
