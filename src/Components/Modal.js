import React, {Component} from 'react';
import '../css/modal.css';

export class Modal extends Component {
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