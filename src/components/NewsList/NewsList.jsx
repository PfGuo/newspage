import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Tag } from 'antd';
import styles from './NewsList.less';

class NewsList extends Component {

    toDetailPage() {

    }

    render() {
        return(
            <div>
                <div className={styles.maincontenttime}>2017-06-27 15:41</div>
                <div className={styles.maincontent}>
                    <a style={{ color: "inherit" }} href="/detail" onClick={this.toDetailPage}>
                        <Card 
                            title={<span><Tag color="green">【新功能】</Tag><span>Pipe功能</span></span>}
                        >能被 pipe 进来，并且将会写文件。并且重新输出（emits）所有数据，因此你可以将它 pipe 到多个文件夹。如果某文件夹不存在，将会自动创建它。
                        </Card>
                    </a>
                </div>
            </div>
        );
    }
};

NewsList.propTypes = {};

export default connect(({blackboardpage}) => ({blackboardpage}))(NewsList);