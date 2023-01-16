import Swal from 'sweetalert2';
import CompelteTips from '../../../utils/Client/tips';

const showTip = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
  });
};

const TipsList = ({ score}) => {
  const tips = CompelteTips.find((tip)=>tip.lvl>=score)
  return (
      <div>
          <h3 className="text-center m-5">TIPS</h3>
      <div className="card-columns">
        {tips.map((tip) => (
          <div key={tip.title} className="card d-flex justify-content-center mb-2" style={{height:100}} onClick={() => showTip(tip.title, tip.text)}>
            <div className="card-body d-flex justify-content-center align-items-center">
              <h5 className="card-title">{tip.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsList;
