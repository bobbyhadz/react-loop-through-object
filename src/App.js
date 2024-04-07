import './App.css';

export default function App() {
  const employee = {
    id: 1,
    name: 'Bobby Hadz',
    salary: 123,
  };

  return (
    <div>
      {/* 👇️ Iterate the object's KEYS */}
      {Object.keys(employee).map((key, index) => {
        return (
          <div key={index}>
            <h2>
              {key}: {employee[key]}
            </h2>

            <hr />
          </div>
        );
      })}

      <br />
      <br />
      <br />

      {/* 👇️ Iterate the object's VALUES */}
      {Object.values(employee).map((value, index) => {
        return (
          <div key={index}>
            <h2>{value}</h2>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
