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
                    <div className="profile-row">
                        <div>
                            <img
                                className="profile-icon"
                                alt='profile-icon'
                                src='https://firebasestorage.googleapis.com/v0/b/tanaka-world.appspot.com/o/lp%2Fme%2F8bit_me_clear.jpg?alt=media&token=165e056b-d97b-4a15-81fd-1c8dbb1bdc51'/>
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
                        エムティーアイ、フクロウラボ、こじんじぎょうぬしをへて2016ねん8がつ curiosity, inc. ににゅうしゃ。エンジニアとして、
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
