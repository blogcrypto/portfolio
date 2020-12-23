import React from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { HtmlTooltip, useStyles } from './AboutStyles';

export default function About({lang}) {
    const classes = useStyles();

    return (
        <>
            { lang === 'ru' ? (
                <div>
                    <p>
                        <strong>BC Portfolio</strong> – полностью бесплатное, анонимное приложение с{ ' ' }
                        <a
                            className="ext"
                            href="https://ru.wikipedia.org/wiki/%D0%9E%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%BD%D0%BE%D0%B5_%D0%BE%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            открытым исходным кодом (wiki)
                        </a>{ ' ' }
                        для отслеживания и анализа крипто активов с любых криптовалютных бирж и кошельков.
                    </p>
                    <p>
                        <strong>BC Portfolio</strong> не собирает и не хранит какую либо информацию своих пользователей.
                        Всю необходимую информацию приложение получает по защищенному протоколу{ ' ' }
                        <a
                            className="ext"
                            href="https://ru.wikipedia.org/wiki/HTTPS"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https (wiki)
                        </a>{ ' ' }из{ ' ' }
                        <a
                            className="ext"
                            href="https://docs.google.com/spreadsheets"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Spreadsheets
                        </a>{ ' ' } и сохраняет непосредственно в память браузера пользователя.
                    </p>
                    <div>Возможности приложения:</div>
                    <ul>
                        <li>Поддержка более 2000 криптовалют</li>
                        <li>
                            Рекомендации на покупку или продажу{ ' ' }
                            <HtmlTooltip
                                enterTouchDelay={ 50 }
                                leaveTouchDelay={ 5000 }
                                placement="top"
                                arrow
                                title={
                                    <picture className="img-wrap">
                                        <source
                                            srcSet="
                                                    https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-recommendation@2x.jpg 2x,
                                                    https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-recommendation.jpg 1x
                                                 " />
                                        <img
                                            className={ classes.img }
                                            alt="BC Portfolio Recommendation"
                                            src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-recommendation.jpg" />
                                    </picture>
                                }
                            >
                                <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Конвертация цен в популярные фиатные валюты{ ' ' }
                            <HtmlTooltip
                                enterTouchDelay={ 50 }
                                leaveTouchDelay={ 5000 }
                                placement="top"
                                arrow
                                title={
                                    <picture className="img-wrap">
                                        <source
                                            srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-currencies@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-currencies.jpg 1x
                                             " />
                                        <img
                                            className={ classes.img }
                                            alt="BC Portfolio Value"
                                            src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-currencies.jpg" />
                                    </picture>
                                }
                            >
                                <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Сводная диаграмма крипто портфолио{ ' ' }
                            <HtmlTooltip
                                enterTouchDelay={ 50 }
                                leaveTouchDelay={ 5000 }
                                placement="top"
                                arrow
                                title={
                                    <picture className="img-wrap">
                                        <source
                                            srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-chart@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-chart.jpg 1x
                                             " />
                                        <img
                                            className={ classes.img }
                                            alt="BC Portfolio Chart"
                                            src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-chart.jpg" />
                                    </picture>
                                }
                            >
                                <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Отображение изменения стоимости актива{ ' ' }
                            <HtmlTooltip
                                enterTouchDelay={ 50 }
                                leaveTouchDelay={ 5000 }
                                placement="top"
                                arrow
                                title={
                                    <picture className="img-wrap">
                                        <source
                                            srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-change@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-change.jpg 1x
                                             " />
                                        <img
                                            className={ classes.img }
                                            alt="BC Portfolio Change"
                                            src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-change.jpg" />
                                    </picture>
                                }
                            >
                                <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Отображение стоимости актива с учетом комиссий{ ' ' }
                            <HtmlTooltip
                                enterTouchDelay={ 50 }
                                leaveTouchDelay={ 5000 }
                                placement="top"
                                arrow
                                title={
                                    <picture className="img-wrap">
                                        <source
                                            srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-value@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-value.jpg 1x
                                             " />
                                        <img
                                            className={ classes.img }
                                            alt="BC Portfolio Value"
                                            src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-value.jpg" />
                                    </picture>
                                }
                            >
                                <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Отображение названия кошелька на котором хранится актив{ ' ' }
                            <HtmlTooltip
                                enterTouchDelay={ 50 }
                                leaveTouchDelay={ 5000 }
                                placement="top"
                                arrow
                                title={
                                    <picture className="img-wrap">
                                        <source
                                            srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-wallets@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-wallets.jpg 1x
                                             " />
                                        <img
                                            className={ classes.img }
                                            alt="BC Portfolio Wallets"
                                            src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-wallets.jpg" />
                                    </picture>
                                }
                            >
                                <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Отображение общей стоимости портфеля{ ' ' }
                            <HtmlTooltip
                                enterTouchDelay={ 50 }
                                leaveTouchDelay={ 5000 }
                                placement="top"
                                arrow
                                title={
                                    <picture className="img-wrap">
                                        <source
                                            srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-total@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-total.jpg 1x
                                             " />
                                        <img
                                            className={ classes.img }
                                            alt="BC Portfolio Total"
                                            src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-total.jpg" />
                                    </picture>
                                }
                            >
                                <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Возможность поделиться ссылкой на свой портфель{ ' ' }
                            <HtmlTooltip
                                enterTouchDelay={ 50 }
                                leaveTouchDelay={ 5000 }
                                placement="top"
                                arrow
                                title={
                                    <picture className="img-wrap">
                                        <source
                                            srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-share@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-share.jpg 1x
                                             " />
                                        <img
                                            className={ classes.img }
                                            alt="BC Portfolio Share Link"
                                            src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-share.jpg" />
                                    </picture>
                                }
                            >
                                <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Кнопка удаление всех данных приложения из браузера{ ' ' }
                            <HtmlTooltip
                                enterTouchDelay={ 50 }
                                leaveTouchDelay={ 5000 }
                                placement="top"
                                arrow
                                title={
                                    <picture className="img-wrap">
                                        <source
                                            srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-delete@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-delete.jpg 1x
                                             " />
                                        <img
                                            className={ classes.img }
                                            alt="BC Portfolio Delete Data"
                                            src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-delete.jpg" />
                                    </picture>
                                }
                            >
                                <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                            </HtmlTooltip>
                        </li>
                    </ul>
                    <p>
                        Для начала работы приложения необходимо создать таблицу{ ' ' }
                        <a
                            className="ext"
                            href="https://docs.google.com/spreadsheets"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Spreadsheets
                        </a>
                        { ' ' }с 7 колонками: Title, Quantity, Price, Buyfee, Sellfee, Wallet, Data{ ' ' }
                        <HtmlTooltip
                            enterTouchDelay={ 50 }
                            leaveTouchDelay={ 5000 }
                            placement="top"
                            arrow
                            title={
                                <picture className="img-wrap">
                                    <source
                                        srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-spreadsheets@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-spreadsheets.jpg 1x
                                             " />
                                    <img
                                        className={ classes.img }
                                        alt="BC Portfolio Spreadsheets Columns"
                                        src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-spreadsheets.jpg" />
                                </picture>
                            }
                        >
                            <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                        </HtmlTooltip>{ ' ' }
                        и открыть доступ к таблице по ссылке{ ' ' }
                        <HtmlTooltip
                            enterTouchDelay={ 50 }
                            leaveTouchDelay={ 5000 }
                            placement="top"
                            arrow
                            title={
                                <picture className="img-wrap">
                                    <source
                                        srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-access@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-access.jpg 1x
                                             " />
                                    <img
                                        className={ classes.img }
                                        alt="BC Portfolio Spreadsheets Publish"
                                        src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-access.jpg" />
                                </picture>
                            }
                        >
                            <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                        </HtmlTooltip>
                        . После добавления ссылки на Google Spreadsheets{ ' ' }
                        <HtmlTooltip
                            enterTouchDelay={ 50 }
                            leaveTouchDelay={ 5000 }
                            placement="top"
                            arrow
                            title={
                                <picture className="img-wrap">
                                    <source
                                        srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-link@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-link.jpg 1x
                                             " />
                                    <img
                                        className={ classes.img }
                                        alt="BC Portfolio Spreadsheets Link"
                                        src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-link.jpg" />
                                </picture>
                            }
                        >
                            <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                        </HtmlTooltip>
                        { ' ' }все изменения в Google таблице будут отображаться в приложении.
                    </p>
                    <p>
                        <a
                            className="ext"
                            href="https://blogcrypto.info/ru/guides/rukovodstvo-polzovatelya-bc-portfolio"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Подробное руководство
                        </a>
                    </p>
                    <p>
                        <a
                            className="ext"
                            href="https://docs.google.com/spreadsheets/d/12aYS3GD7r4IFt92GYBvs_N5h9alE57a2FWxwdOnP_ik/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Пример таблицы
                        </a>
                    </p>
                    <p>
                        Код приложения на{ ' ' }
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className={ classes.git }
                            href="https://github.com/blogcrypto/portfolio"
                        >
                            GitHub{ ' ' }
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className={ classes.gitLogo }
                                style={ {color: '#fff'} }
                            >
                                <path
                                    fill="#777"
                                    d="M16,0.7c-8.8,0-16,7.2-16,16c0,7.2,4.6,13.2,11.2,15.2l9.8-0.1c6.5-2,11-8,11-15.2C32,7.9,24.8,0.7,16,0.7z"
                                />
                                <path
                                    fill="currentColor"
                                    className="octo-arm"
                                    d="M12.2,28.5c-4.5,1-5.5-1.9-5.5-1.9c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.3"
                                />
                                <path
                                    fill="currentColor"
                                    className="octo-body"
                                    d="M11,32c0,0,1-0.4,1-0.8l0-5.3c0.2-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8c0-1.8,0.6-3.2,1.7-4.4C7.1,10.9,6.6,9.2,7.5,7c0,0,1.4-0.4,4.5,1.6c1.3-0.4,2.7-0.5,4.1-0.6c1.4,0,2.8,0.2,4.1,0.6c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1.1,1.2,1.7,2.6,1.7,4.4c0,6.2-3.8,7.6-7.4,8.1c0.6,0.5,1.1,1.5,1.1,3l0,4.4c0,0.5,1.1,0.9,1.2,0.9L11,32z"
                                />
                            </svg>
                        </a>
                    </p>
                </div>
            ) : (
                  <div>
                      <p>
                          <strong>BC Portfolio</strong> is a completely free,{ ' ' }
                          <a
                              className="ext"
                              href="https://en.wikipedia.org/wiki/Open-source_software"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              open source (wiki)
                          </a>
                          { ' ' }anonymous application for tracking and analyzing your crypto assets from any crypto
                          exchanges and wallets.
                      </p>
                      <p>
                          <strong>BC Portfolio</strong> does not collect or store any information from its users.
                          The application receives all the necessary information via the secure{ ' ' }
                          <a
                              className="ext"
                              href="https://en.wikipedia.org/wiki/HTTPS"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              https (wiki)
                          </a>
                          { ' ' }protocol from{ ' ' }
                          <a
                              className="ext"
                              href="https://docs.google.com/spreadsheets"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              Google Spreadsheets
                          </a>
                          { ' ' }and stores it directly in the user's browser memory.
                      </p>
                      <div>Application features:</div>
                      <ul>
                          <li>Support for over 2000 cryptocurrencies</li>
                          <li>
                              Recommendations for buying and selling{ ' ' }
                              <HtmlTooltip
                                  enterTouchDelay={ 50 }
                                  leaveTouchDelay={ 5000 }
                                  placement="top"
                                  arrow
                                  title={
                                      <picture className="img-wrap">
                                          <source
                                              srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-recommendation@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-recommendation.jpg 1x
                                             " />
                                          <img
                                              className={ classes.img }
                                              alt="BC Portfolio Recommendation"
                                              src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-recommendation.jpg" />
                                      </picture>
                                  }
                              >
                                  <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                              </HtmlTooltip>
                          </li>
                          <li>
                              Converting prices to popular fiat currencies{ ' ' }
                              <HtmlTooltip
                                  enterTouchDelay={ 50 }
                                  leaveTouchDelay={ 5000 }
                                  placement="top"
                                  arrow
                                  title={
                                      <picture className="img-wrap">
                                          <source
                                              srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-currencies@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-currencies.jpg 1x
                                             " />
                                          <img
                                              className={ classes.img }
                                              alt="BC Portfolio Currencies"
                                              src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-currencies.jpg" />
                                      </picture>
                                  }
                              >
                                  <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                              </HtmlTooltip>
                          </li>
                          <li>
                              Crypto Assets Summary Chart{ ' ' }
                              <HtmlTooltip
                                  enterTouchDelay={ 50 }
                                  leaveTouchDelay={ 5000 }
                                  placement="top"
                                  arrow
                                  title={
                                      <picture className="img-wrap">
                                          <source
                                              srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-chart@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-chart.jpg 1x
                                             " />
                                          <img
                                              className={ classes.img }
                                              alt="BC Portfolio Chart"
                                              src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-chart.jpg" />
                                      </picture>
                                  }
                              >
                                  <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                              </HtmlTooltip>
                          </li>
                          <li>
                              Displaying the change in the value of an asset{ ' ' }
                              <HtmlTooltip
                                  enterTouchDelay={ 50 }
                                  leaveTouchDelay={ 5000 }
                                  placement="top"
                                  arrow
                                  title={
                                      <picture className="img-wrap">
                                          <source
                                              srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-change@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-change.jpg 1x
                                             " />
                                          <img
                                              className={ classes.img }
                                              alt="BC Portfolio Change"
                                              src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-change.jpg" />
                                      </picture>
                                  }
                              >
                                  <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                              </HtmlTooltip>
                          </li>
                          <li>
                              Display of asset value including commissions{ ' ' }
                              <HtmlTooltip
                                  enterTouchDelay={ 50 }
                                  leaveTouchDelay={ 5000 }
                                  placement="top"
                                  arrow
                                  title={
                                      <picture className="img-wrap">
                                          <source
                                              srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-value@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-value.jpg 1x
                                             " />
                                          <img
                                              className={ classes.img }
                                              alt="BC Portfolio Value"
                                              src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-value.jpg" />
                                      </picture>
                                  }
                              >
                                  <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                              </HtmlTooltip>
                          </li>
                          <li>
                              Displaying the name of the wallet where the asset is stored{ ' ' }
                              <HtmlTooltip
                                  enterTouchDelay={ 50 }
                                  leaveTouchDelay={ 5000 }
                                  placement="top"
                                  arrow
                                  title={
                                      <picture className="img-wrap">
                                          <source
                                              srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-wallets@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-wallets.jpg 1x
                                             " />
                                          <img
                                              className={ classes.img }
                                              alt="BC Portfolio Wallets"
                                              src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-wallets.jpg" />
                                      </picture>
                                  }
                              >
                                  <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                              </HtmlTooltip>
                          </li>
                          <li>
                              Displaying the total portfolio value{ ' ' }
                              <HtmlTooltip
                                  enterTouchDelay={ 50 }
                                  leaveTouchDelay={ 5000 }
                                  placement="top"
                                  arrow
                                  title={
                                      <picture className="img-wrap">
                                          <source
                                              srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-total@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-total.jpg 1x
                                             " />
                                          <img
                                              className={ classes.img }
                                              alt="BC Portfolio Total"
                                              src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-total.jpg" />
                                      </picture>
                                  }
                              >
                                  <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                              </HtmlTooltip>
                          </li>
                          <li>
                              Ability to share a link to your portfolio{ ' ' }
                              <HtmlTooltip
                                  enterTouchDelay={ 50 }
                                  leaveTouchDelay={ 5000 }
                                  placement="top"
                                  arrow
                                  title={
                                      <picture className="img-wrap">
                                          <source
                                              srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-share@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-share.jpg 1x
                                             " />
                                          <img
                                              className={ classes.img }
                                              alt="BC Portfolio Share Link"
                                              src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-share.jpg" />
                                      </picture>
                                  }
                              >
                                  <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                              </HtmlTooltip>
                          </li>
                          <li>
                              Button to delete all application data from the browser{ ' ' }
                              <HtmlTooltip
                                  enterTouchDelay={ 50 }
                                  leaveTouchDelay={ 5000 }
                                  placement="top"
                                  arrow
                                  title={
                                      <picture className="img-wrap">
                                          <source
                                              srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-delete@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-delete.jpg 1x
                                             " />
                                          <img
                                              className={ classes.img }
                                              alt="BC Portfolio Delete Data"
                                              src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-delete.jpg" />
                                      </picture>
                                  }
                              >
                                  <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                              </HtmlTooltip>
                          </li>
                      </ul>
                      <p>
                          To start the application, you need to create a Google Spreadsheets{ ' ' }
                          <a
                              className="ext"
                              href="https://docs.google.com/spreadsheets"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              Google Spreadsheets
                          </a>
                          { ' ' }with 7 columns: Title, Quantity, Price, Buyfee, Sellfee, Wallet, Data{ ' ' }
                          <HtmlTooltip
                              enterTouchDelay={ 50 }
                              leaveTouchDelay={ 5000 }
                              placement="top"
                              arrow
                              title={
                                  <picture className="img-wrap">
                                      <source
                                          srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-spreadsheets@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-spreadsheets.jpg 1x
                                             " />
                                      <img
                                          className={ classes.img }
                                          alt="BC Portfolio Google Spreadsheets"
                                          src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-spreadsheets.jpg" />
                                  </picture>
                              }
                          >
                              <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                          </HtmlTooltip>{ ' ' }
                          and open access by link{ ' ' }
                          <HtmlTooltip
                              enterTouchDelay={ 50 }
                              leaveTouchDelay={ 5000 }
                              placement="top"
                              arrow
                              title={
                                  <picture className="img-wrap">
                                      <source
                                          srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-access@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-access.jpg 1x
                                             " />
                                      <img
                                          className={ classes.img }
                                          alt="BC Portfolio Spreadsheets Publish"
                                          src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-access.jpg" />
                                  </picture>
                              }
                          >
                              <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                          </HtmlTooltip>
                          . After adding the link to the Google spreadsheet{ ' ' }
                          <HtmlTooltip
                              enterTouchDelay={ 50 }
                              leaveTouchDelay={ 5000 }
                              placement="top"
                              arrow
                              title={
                                  <picture className="img-wrap">
                                      <source
                                          srcSet="
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-link@2x.jpg 2x,
                                                https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-link.jpg 1x
                                             " />
                                      <img
                                          className={ classes.img }
                                          alt="BC Portfolio Spreadsheets Link"
                                          src="https://blogcrypto.info/public/images/portfolio-tooltip/portfolio-tooltip-link.jpg" />
                                  </picture>
                              }
                          >
                              <InfoOutlinedIcon className={ classes.toggleTooltip } color="primary" />
                          </HtmlTooltip>
                          , changes in the{ ' ' }
                          <a
                              className="ext"
                              href="https://docs.google.com/spreadsheets"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              Google Spreadsheets
                          </a>
                          { ' ' }will be reflected in the application.
                      </p>
                      <p>
                          <a
                              className="ext"
                              href="https://blogcrypto.info/guides/bc-portfolio-app-user-guide"
                              target="_blank"
                              rel="noreferrer"
                          >
                              Guide
                          </a>
                      </p>
                      <p>
                          <a
                              className="ext"
                              href="https://docs.google.com/spreadsheets/d/12aYS3GD7r4IFt92GYBvs_N5h9alE57a2FWxwdOnP_ik/"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              Example table
                          </a>
                      </p>
                      <p>
                          Code on{ ' ' }
                          <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className={ classes.git }
                              href="https://github.com/blogcrypto/portfolio"
                          >
                              GitHub{ ' ' }
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 32 32"
                                  className={ classes.gitLogo }
                                  style={ {color: '#fff'} }
                              >
                                  <path
                                      fill="#777"
                                      d="M16,0.7c-8.8,0-16,7.2-16,16c0,7.2,4.6,13.2,11.2,15.2l9.8-0.1c6.5-2,11-8,11-15.2C32,7.9,24.8,0.7,16,0.7z"
                                  />
                                  <path
                                      fill="currentColor"
                                      className="octo-arm"
                                      d="M12.2,28.5c-4.5,1-5.5-1.9-5.5-1.9c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.3"
                                  />
                                  <path
                                      fill="currentColor"
                                      className="octo-body"
                                      d="M11,32c0,0,1-0.4,1-0.8l0-5.3c0.2-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8c0-1.8,0.6-3.2,1.7-4.4C7.1,10.9,6.6,9.2,7.5,7c0,0,1.4-0.4,4.5,1.6c1.3-0.4,2.7-0.5,4.1-0.6c1.4,0,2.8,0.2,4.1,0.6c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1.1,1.2,1.7,2.6,1.7,4.4c0,6.2-3.8,7.6-7.4,8.1c0.6,0.5,1.1,1.5,1.1,3l0,4.4c0,0.5,1.1,0.9,1.2,0.9L11,32z"
                                  />
                              </svg>
                          </a>
                      </p>
                  </div>
              ) }
        </>
    );
}
