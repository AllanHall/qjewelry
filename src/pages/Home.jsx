import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import * as data from '../data/mockData.json'
import jewel from '../images/jewel.jpg'
import q from '../images/flaming-q.jpg'

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
        <a id="rabbit" className="menu-item" href="/rabbit">
          Down the Rabbit Hole
        </a>
        <a id="pill" className="menu-item" href="/pill">
          Red Pill
        </a>
        <a id="show" className="menu-item" href="/show">
          Enjoy the Show!
        </a>
        <a id="q" className="menu-item" href="/q">
          Q and Q-anon
        </a>
        <a id="move" className="menu-item" href="/move">
          Q Movement
        </a>
        <a id="gold" className="menu-item" href="/gold">
          Gold
        </a>
        <a id="silver" className="menu-item" href="/silver">
          Silver
        </a>
        <a id="rose" className="menu-item" href="/rose">
          Rose Gold
        </a>
        <a id="metal" className="menu-item" href="/metal">
          Gunmetal
        </a>
        <a id="snap" className="menu-item" href="/snap">
          Snap Jewelry
        </a>
        <a id="more" className="menu-item" href="/more">
          More
        </a>
      </Menu>
      <section className="header">
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
      <section className="spinner" id="spinner">
        <div className="page-header">Patriotic Spinner Flag Bracelet</div>
      </section>
    </div>
  )
}
