import React from 'react';

function Home(props) {
    return (
        <div>
            {/* mainBanner */}
            <div className="mainBanner">
                <div className="mainBanner__text">
                    <h1>HY-TOGETHER</h1>

                    <p>HY-TOGETHER는 한양대학교 학생들을 위한 플랫폼입니다.</p>
                    <p>학생들이 자유롭게 소통하고, 서로를 도울 수 있는 공간을 만들어보세요.</p>

                    <button className="mainBanner__btn">지금 시작하기</button>
                    </div>
                    </div>
        </div>
    );
}

export default Home;