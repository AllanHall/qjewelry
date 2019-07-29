import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import * as data from '../data/mockData.json'
import jewel from '../images/jewel.jpg'

export default function Home() {
  return (
    <div>
      <Menu disableAutoFocus>
        <a className="menu-item" href="#swamp">
          Drain the Swamp
        </a>
        <a className="menu-item" href="#trump">
          Trump
        </a>
        <a className="menu-item" href="#spinner">
          Patriotic Spinner Flag Bracelet
        </a>
        <a className="menu-item" href="#rabbit">
          Down the Rabbit Hole
        </a>
        <a className="menu-item" href="#pill">
          Red Pill
        </a>
        <a className="menu-item" href="#show">
          Enjoy the Show!
        </a>
        <a className="menu-item" href="#q">
          Q and Q-anon
        </a>
        <a className="menu-item" href="#move">
          Q Movement
        </a>
        <a className="menu-item" href="#gold">
          Gold
        </a>
        <a className="menu-item" href="#silver">
          Silver
        </a>
        <a className="menu-item" href="#rose">
          Rose Gold
        </a>
        <a className="menu-item" href="#metal">
          Gunmetal
        </a>
        <a className="menu-item" href="#snap">
          Snap Jewelry
        </a>
        <a className="menu-item" href="#more">
          More
        </a>
        <a className="menu-item" href="#top">
          Top of Page
        </a>
      </Menu>
      <section className="header" id="top">
        {/* <img src={q} /> */}
        <div className="main-title">Q-anon Jewelry</div>
        <div className="motto">A company by Patriots for Patriots!</div>
      </section>
      <section className="swamp" id="swamp">
        <div className="page-header">Drain the Swamp</div>
        <div className="body">
          {data.swamp.map(piece => (
            <div className="jewelry-cell">
              <img className="jewelry-photo" src={jewel} />
              <p>{piece.name}</p>
              <p>{piece.description}</p>
              <p>{piece.precision}</p>
              <p>$ {piece.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="trump" id="trump">
        <div className="page-header">Trump</div>
        <div className="body">
          {data.trump.map(piece => (
            <div className="jewelry-cell">
              <img className="jewelry-photo" src={jewel} />
              <p>{piece.name}</p>
              <p>{piece.description}</p>
              <p>{piece.precision}</p>
              <p>$ {piece.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="spinner" id="spinner">
        <div className="page-header">Patriotic Spinner Flag Bracelet</div>
        <div className="body">
          {data.spinner.map(piece => (
            <div className="jewelry-cell spinner-cell">
              <img className="jewelry-photo" src={jewel} />
              <p>{piece.name}</p>
              <p>{piece.description}</p>
              <p>{piece.precision}</p>
              <p>$ {piece.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="rabbit" id="rabbit">
        <div className="page-header">Down the Rabbit Hole</div>
        <div className="body">
          {data.rabbit.map(piece => (
            <div className="jewelry-cell">
              <img className="jewelry-photo" src={jewel} />
              <p>{piece.name}</p>
              <p>{piece.description}</p>
              <p>{piece.precision}</p>
              <p>$ {piece.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="pill" id="pill">
        <div className="page-header">Red Pill</div>
        <div className="body">
          {data.pill.map(piece => (
            <div className="jewelry-cell">
              <img className="jewelry-photo" src={jewel} />
              <p>{piece.name}</p>
              <p>{piece.description}</p>
              <p>{piece.precision}</p>
              <p>$ {piece.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="show" id="show">
        <div className="page-header">Enjoy the Show!</div>
        <div className="body">
          {data.show.map(piece => (
            <div className="jewelry-cell">
              <img className="jewelry-photo" src={jewel} />
              <p>{piece.name}</p>
              <p>{piece.description}</p>
              <p>{piece.precision}</p>
              <p>$ {piece.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="q" id="q">
        <div className="page-header">Q and Q-anon</div>
        <div className="body">
          {data.q.map(piece => (
            <div className="jewelry-cell">
              <img className="jewelry-photo" src={jewel} />
              <p>{piece.name}</p>
              <p>{piece.description}</p>
              <p>{piece.precision}</p>
              <p>$ {piece.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="move" id="move">
        <div className="page-header">Q Movement</div>
        <div className="body">
          {data.move.map(piece => (
            <div className="jewelry-cell">
              <img className="jewelry-photo" src={jewel} />
              <p>{piece.name}</p>
              <p>{piece.description}</p>
              <p>{piece.precision}</p>
              <p>$ {piece.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="gold" id="gold">
        <div className="page-header">Gold</div>
        <div className="body">
          {data.gold.map(piece => (
            <div className="jewelry-cell">
              <img className="jewelry-photo" src={jewel} />
              <p>{piece.name}</p>
              <p>{piece.description}</p>
              <p>{piece.precision}</p>
              <p>$ {piece.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="silver" id="silver">
        <div className="page-header">Silver</div>
        <div className="body">
          {data.silver.map(piece => (
            <div className="jewelry-cell">
              <img className="jewelry-photo" src={jewel} />
              <p>{piece.name}</p>
              <p>{piece.description}</p>
              <p>{piece.precision}</p>
              <p>$ {piece.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="rose" id="rose">
        <div className="page-header">Rose Gold</div>
        <div className="body">
          {data.rose.map(piece => (
            <div className="jewelry-cell">
              <img className="jewelry-photo" src={jewel} />
              <p>{piece.name}</p>
              <p>{piece.description}</p>
              <p>{piece.precision}</p>
              <p>$ {piece.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="metal" id="metal">
        <div className="page-header">Gunmetal</div>
        <div className="body">
          {data.metal.map(piece => (
            <div className="jewelry-cell">
              <img className="jewelry-photo" src={jewel} />
              <p>{piece.name}</p>
              <p>{piece.description}</p>
              <p>{piece.precision}</p>
              <p>$ {piece.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="snap" id="snap">
        <div className="page-header">Snap Jewelry</div>
        <div className="body">
          {data.snap.map(piece => (
            <div className="jewelry-cell">
              <img className="jewelry-photo" src={jewel} />
              <p>{piece.name}</p>
              <p>{piece.description}</p>
              <p>{piece.precision}</p>
              <p>$ {piece.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="footer" id="more">
        <a className="top" href="#top">
          Top of Page
        </a>
        <div className="copyright">Copyright Q-Jewelry 2019</div>
      </section>
    </div>
  )
}
