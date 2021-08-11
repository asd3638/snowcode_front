import React, {Component} from 'react';
import '../css/modal.css';

export class Modal extends Component {
    // modal 창 열고 닫기
    // modal.css 내용이 적용되게 해줌
    // (화면 위에서부터 스르륵 뜨기, 화면에 modal 창 열 때 스타일에 맞게 나타내기)
    render() {
        const {open} = this.props;
        return (
            <div className={ open ? 'openModal modal': 'modal' }>
                { open ? (  
                    <section>
                        <main>
                            {this.props.children}
                        </main>
                    </section>
                ) : null }
            </div>
        )
    }
}

export default Modal;