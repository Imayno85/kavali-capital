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
      className={`${styles.flexCenter} my-4 border-t-[1px] border-t-[#3F3E45] items-center`}
    >
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <div className="flex flex-col items-center">
              <img
                src={client.logo}
                alt="client_logo"
                className="sm:w-[192px] w-[100px] object-contain rounded-xl"
              />
              <span className="font-poppins font-normal text-[14px] leading-[24px] text-dimWhite mt-2 text-center">
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
