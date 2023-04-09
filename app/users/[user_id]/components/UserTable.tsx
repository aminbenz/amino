type Props = {
  user: User;
};

export default async function UserTable({ user }: Props) {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Field</th>
          <th className="px-4 py-2">Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(user).map(([key, value]) => {
          if (
            key === "address" &&
            typeof value === "object" &&
            value !== null
          ) {
            return Object.entries(value).map(([addressKey, addressValue]) => (
              <tr key={addressKey}>
                <td className="border px-4 py-2">{addressKey}</td>
                <td className="border px-4 py-2">
                  {/* @ts-ignore */}
                  {addressValue || "(empty)"}
                </td>
              </tr>
            ));
          } else {
            return (
              <tr key={key}>
                <td className="border px-4 py-2">{key}</td>
                <td className="border px-4 py-2">{value ?? "(empty)"}</td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}
