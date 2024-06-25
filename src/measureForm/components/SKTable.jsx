import React from "react";
import { produce } from "immer";

const columnHead = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

export default function SKTable({ name, data, setData, singleSelect }) {
  return (
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
                          <div className="table-cell-select-box">
                            <div>
                              <select
                                value={data[name][j - 1][`${singleSelect.row}`]}
                                onChange={(e) => setData(produce((s) => { s[name][j - 1][`${singleSelect.row}`] = e.target.value }))}
                              >
                                <option value="">select</option>
                                {singleSelect.opt.map((op) => <option key={op} value={op}>{op}</option>)}
                              </select>
                              <label>wall</label>
                            </div>
                          </div>
                          :
                          <div className="table-cell-select-box">
                            <div>
                              <select
                                value={data[name][j - 1][`${columnHead[i]}`]['ft']}
                                onChange={(e) => setData(produce((s) => { s[name][j - 1][`${columnHead[i]}`]['ft'] = e.target.value }))}
                              >
                                <option value="">select</option>
                                {[...Array(26)].map((_, n) => <option key={n} value={n}>{n}</option>)}
                              </select>
                              <label>ft</label>
                            </div>

                            <div>
                              <select
                                value={data[name][j - 1][`${columnHead[i]}`]['in']}
                                onChange={(e) => setData(produce((s) => { s[name][j - 1][`${columnHead[i]}`]['in'] = e.target.value }))}
                              >
                                <option value="">select</option>
                                {[...Array(13)].map((_, n) => <option key={n} value={n}>{n}</option>)}
                              </select>
                              <label>in</label>
                            </div>
                          </div>
                      }
                    </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
