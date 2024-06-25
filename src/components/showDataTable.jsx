const columnHead = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

function GridTable({ name, data, singleSelect }) {
  return (
    <div className="grid-table" style={{ width: '100%' }}>
      <table>
        <thead>
          <tr>
            {[...Array(data[name].length + 1)].map((_, i) => (<th key={i} className="textCenter">{i === 0 ? '#' : i}</th>))}
          </tr>
        </thead>
        <tbody>
          {
            [...Array(Object.keys(data[name][0]).length)].map((_, i) => (
              <tr key={i}>
                {
                  [...Array(data[name].length + 1)].map((_, j) => (
                    j === 0 ?
                      <th key={j}>{columnHead[i]}</th>
                      :
                      <td key={j}>
                      {
                      (singleSelect && singleSelect.row === columnHead[i]) ?
                        <p>{data[name][j - 1][`${singleSelect.row}`]} wall</p>
                        :
                        <>
                          <p>{data[name][j - 1][`${columnHead[i]}`]['ft']} ft</p>
                          <p>{data[name][j - 1][`${columnHead[i]}`]['in']} in</p>
                        </>
                    }
                     </td>
                ))
              }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default GridTable;
