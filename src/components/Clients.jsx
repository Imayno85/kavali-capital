import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  // Check for duplicate ids
  const duplicateIds = clients.filter(
    (client, index) => clients.findIndex((c) => c.id === client.id) !== index
  );

  console.log("Duplicate IDs:", duplicateIds);

  return (
    <section
      id="clients"
      className={`${styles.flexCenter}  border-t-[1px] border-t-[#3F3E45] items-center mb-16 `}
    >
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-4`}
          >
            <div className="flex flex-col items-center">
              <img
                src={client.logo}
                alt="client_logo"
                className="sm:w-[192px] w-[100px] object-contain rounded-xl mt-16"
              />
              <span className={`${styles.paragraph1}  mt-4 text-center`}>
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
