import Card from "./styles";

const ResultCard = ({ title, output }) => {
  return (
    <Card>
      <h4 className="bg-primary heading-4">{title}</h4>
      <div className="body">
        <p>{output}</p>
      </div>
    </Card>
  );
};

export default ResultCard;
