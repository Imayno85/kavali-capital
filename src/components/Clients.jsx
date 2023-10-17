import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  // Check for duplicate ids
  const duplicateIds = clients.filter(
    (client, index) => clients.findIndex((c) => c.id === client.id) !== index
  );

  // Log duplicate IDs (for debugging)
  console.log("Duplicate IDs:", duplicateIds);

  return (
    // Clients section
    <section id="clients" className={`${styles.flexCenter} items-center mb-16`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {/* Map through clients and render each */}
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-4`}
          >
            <div className="flex flex-col items-center">
              {/* Client Logo */}
              <img
                src={client.logo}
                alt={`${client.name} Logo`} // Alt text with client name
                className="sm:w-[192px] w-[100px] object-contain rounded-xl mt-16"
              />
              {/* Client Name */}
              <span className={`${styles.paragraph1} mt-4 text-center`}>
                {client.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
