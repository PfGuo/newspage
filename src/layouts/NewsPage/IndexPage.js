import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout, Select } from 'antd';
import styles from './IndexPage.css';
import NewsList from '../../components/NewsList/NewsList';

const { Header, Footer, Sider, Content } = Layout;
const Option = Select.Option;

class IndexPage extends Component {

    selectSpecies(value) {
        console.log(`selected ${value}`);
    }

    selectPeriod(value) {
        console.log(`selected ${value}`);
    }

    render() {
        return(
            <Layout>
                <Header className={styles.headTitle}>监控黑板报</Header>
                <Content>
                    <div className={styles.selectMenu}>
                        <Select className={styles.dropdownmenu} placeholder="通告类型" onChange={this.selectSpecies}>
                            <Option value="new">新功能</Option>
                            <Option value="exprienct">体验优化</Option>
                            <Option value="bug">BUG修复</Option>
                        </Select>

                        <Select className={styles.dropdownmenu} placeholder="时间范围" onChange={this.selectPeriod}>
                            <Option value="1">1天</Option>
                            <Option value="2">2天</Option>
                            <Option value="3">3天</Option>
                        </Select>
                    </div>
                    <div className={styles.maincontent}>
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                    </div>
                </Content>
            </Layout>
        );
    }
};

IndexPage.propTypes = {};

export default connect(({blackboardpage}) => ({blackboardpage}))(IndexPage);