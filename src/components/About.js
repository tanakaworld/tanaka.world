import React, {Component} from 'react';

const unownText = (text) => {
    return text.split('').map(t => 'unown' + t).join('');
};

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        };
        this._updateInputText = this._updateInputText.bind(this);
    }

    _updateInputText(e) {
        this.setState({
            inputText: e.currentTarget.value
        })
    }

    render() {
        return (
            <div id="about">
                <div className="profile-wrap">
                    <div className="profile-row profile-row-has-child">
                        <div>
                            <img
                                className="profile-icon"
                                alt='profile-icon'
                                src='https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2Ftanakaworld.jpg?alt=media&token=d87a363e-25a2-4628-ba9e-f146c23ad695'/>
                        </div>
                        <div className="profile-property">
                            <div><a href="http://tanaka.world">tanakaworld</a></div>
                            <div>Software Engineer</div>
                            <div>
                                たかさ 1.75m
                            </div>
                            <div>
                                おもさ 62.0kg
                            </div>
                        </div>
                    </div>

                    <div className="profile-row">
                        あおやまがくいんだいがくりこうがくぶじょうほうテクノロジーがっかそつ。<br/>
                        <a href='http://www.mti.co.jp/' target='_blank'>エムティーアイ</a>、
                        <a href='http://fukurou-labo.co.jp/' target='_blank'>フクロウラボ</a>、
                        こじんじぎょうぬしをへて、2016ねん8がつ
                        <a href='https://www.curiosity-inc.jp/' target='_blank'>curiosity, inc.</a> ににゅうしゃ。エンジニアとして、
                        Webのフロントエンドからインフラまでおおくのプロジェクトにたずわる。<br/>
                        JavaScript・C#・Rubyを用いたアプリケーションかいはつをとくいとしている。<br/>
                        ピクセルアートとルービックキューブをこよなく愛する。
                    </div>
                    <div>
                        <ul>
                            <li><a href="https://twitter.com/_tanakaworld">Twitter</a></li>
                            <li><a href="https://github.com/tanakaworld">GitHub</a></li>
                            <li><a href="http://qiita.com/tanakaworld">Qiita (Short Tips)</a></li>
                            <li><a href="https://www.facebook.com/tanaka.world">Facebook</a></li>
                        </ul>
                    </div>
                    <div className="profile-row">
                        <p>
                            <a href="http://tanaka.world">tanakaworld</a> is a Software Engineer in Japan.
                        </p>
                    </div>
                    <div className="profile-row">
                        <p>
                            <a href="http://tanaka.world">{unownText('tanakaworld')}</a> {unownText('is')} {unownText('a')} {unownText('software')} {unownText('engineer')} {unownText('in')} {unownText('japan')}.
                        </p>
                    </div>
                    <div className="profile-row">
                        <p>
                            たなかわーるどは日本のソフトウェアエンジニアです。
                        </p>
                    </div>
                </div>
                {/*<hr/>*/
                }

                {/*<input type='text' placeholder='enter some text ...' onChange={this._updateInputText}/>*/
                }
                {/*<pre>*/
                }
                {/*{unownText(this.state.inputText)}*/
                }
                {/*</pre>*/
                }
            </div>
        )
    }
}
