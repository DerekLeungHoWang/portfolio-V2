import React from 'react'

function PictureArea() {
    return (
        <Row container item
            lg={12}

        >
            <TopTitle
            >
                <p className="projectDescription animatable">Frontend</p>
                <p className="projectDescription animatable">2021</p>
            </TopTitle>


            <div className='img-container'>
                <img
                    ref={el => (imageRef = el)}
                    src={item.img}
                />
            </div>


        </Row>
    )
}

export default PictureArea
