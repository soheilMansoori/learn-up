import Dropdown from 'react-bootstrap/Dropdown'
import './FilterButtons.css'

export default function FilterButtons({ openFilterMenu, btnTitle, dropdownItems, allItemsLength }) {
  return (
    <div className="row align-items-center mb-3">
      <div className="col-lg-6 col-md-6 col-sm-12 mb-2 mb-md-0 ">
        <strong>{allItemsLength}</strong> جزوه و کتاب آموزشی یافت شد.
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 ordering">
        <div className="filter_wraps">
          <div className="dl">
            <div id="main2">
              <a href="#" onClick={openFilterMenu} className="btn btn-theme arrow-btn filter_open">
                باکس فیلتر
                <span>
                  <i className="fas fa-arrow-alt-circle-left" />
                </span>
              </a>
            </div>
          </div>
          <Dropdown className="dropdown">
            <Dropdown.Toggle variant='button' className="btn btn-custom dropdown-toggle">
              {btnTitle}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {dropdownItems.length ? (
                <>
                  {dropdownItems.map((item) => (
                    <Dropdown.Item key={item.id} className="dropdown-item">{item.name}</Dropdown.Item>
                  ))}
                </>
              ) : null}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
