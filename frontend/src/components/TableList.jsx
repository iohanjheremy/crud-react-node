import React from "react";

export default function TableList({ handleOpen }) {
  const [clients, setClients] = React.useState([
    {
      id: "1",
      name: "John Doe",
      email: "test123@email.com",
      job: "Developer",
      rate: "100",
      isActive: true,
    },
    {
      id: "2",
      name: "John2 Doe",
      email: "test122@email.com",
      job: "Developer",
      rate: "102",
      isActive: false,
    },
    {
      id: "3",
      name: "Joe Goldberg",
      email: "test133@email.com",
      job: "Developer",
      rate: "103",
      isActive: false,
    },
  ]);

  return (
    <div className="mt-10 px-4 w-full flex justify-center text-base">
      <div className="overflow-x-auto w-full max-w-6xl">
        <div className="overflow-x-auto">
          <table className="table table-zebra text-center">
            <thead className="bg-base-200 hidden md:table-header-group">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Job</th>
                <th>Rate</th>
                <th>Status</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>

            <tbody className="hover text-base">
              {clients.map((client) => (
                <tr key={client.id} className="md:table-row block border border-base-300 rounded-lg p-4 mb-4 md:border-none md:p-0">
                  <td className="block md:table-cell font-semibold">{client.id}</td>
                  <td className="block md:table-cell">{client.name}</td>
                  <td className="block md:table-cell">{client.email}</td>
                  <td className="block md:table-cell">{client.job}</td>
                  <td className="block md:table-cell">${client.rate}</td>
                  <td className="block md:table-cell">
                    <button
                      className={`btn p-5 text-base btn-xs w-24 rounded-full ${
                        client.isActive
                          ? "btn-primary"
                          : "btn-outline btn-primary"
                      }`}
                    >
                      {client.isActive ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td className="block md:table-cell ">
                    <button
                      onClick={() => handleOpen("edit", client)}
                      className="btn btn-xs btn-secondary mx-1 p-5 text-base"
                    >
                      Update
                    </button>
                  </td>
                  <td className="block md:table-cell">
                    <button className="btn btn-xs btn-error mx-1 p-5 text-base">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}