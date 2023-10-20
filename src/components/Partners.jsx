import { partners } from "../constants";
import styles from "../style";

const Partners = () => {
  // Check for duplicate ids
  const duplicateIds = partners.filter(
    (partner, index) => partners.findIndex((c) => c.id === partner.id) !== index
  );

  // Log duplicate IDs (for debugging)
  console.log("Duplicate IDs:", duplicateIds);

  return (
    // Partners section
    <section
      id="partners"
      className={`${styles.flexCenter} items-center mb-16`}
    >
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {/* Map through partners and render each */}
        {partners.map((partner) => (
          <div
            key={partner.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-4`}
          >
            <div className="flex flex-col items-center">
              {/* Partner Logo */}
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`} // Alt text with partner name
                  className="sm:w-[192px] w-[100px] object-contain rounded-xl mt-16"
                />
              </a>
              {/* Partner Name */}
              <span className={`${styles.paragraph1} mt-4 text-center`}>
                {partner.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
