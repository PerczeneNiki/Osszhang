import React from 'react';

export default ({ id = "contact" }) => {
    return (
        <div id="mlb2-12177806" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-12177806">
            <div class="ml-form-align-center ">
                <div class="ml-form-embedWrapper embedForm">
                    <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
                        <div class="ml-form-embedContent">

                            <h4>IRATKOZZ FEL PROGRAMÉRTESÍTŐ LEVELEINKRE</h4>
                            <p>Minden hónapban elküldjük Neked a következő hónap eseményeit és egyéb érdekes és hasznos információkat</p>

                        </div>
                        <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/658136/forms/112556581032297660/subscribe" data-code="" method="post" target="_blank">
                            <div class="ml-form-formContent">
                                <div class="ml-form-fieldRow ">
                                    <div class="ml-field-group ml-field-name ml-validate-required">
                                        <input aria-label="name" aria-required="true" type="text" class="form-control" data-inputmask="" name="fields[name]" placeholder="Hogyan szólíthatunk?" autocomplete="given-name" />
                                    </div>
                                </div><div class="ml-form-fieldRow ml-last-item">
                                    <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                        <input aria-label="email" aria-required="true" type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="Email címed" autocomplete="email" />
                                    </div>
                                </div>
                            </div>
                            <div class="ml-form-embedPermissions" >
                                <div class="ml-form-embedPermissionsContent default privacy-policy">
                                    <p>You can unsubscribe anytime. For more details, review our Privacy Policy.</p>
                                </div>
                            </div>
                            <input type="hidden" name="ml-submit" value="1" />
                            <div class="ml-form-embedSubmit">
                                <button type="submit" class="primary">Feliratkozás</button>
                                <button disabled="disabled"  type="button" class="loading">
                                    <div class="ml-form-embedSubmitLoad"></div>
                                    <span class="sr-only">Loading...</span>
                                </button>
                            </div>
                            <input type="hidden" name="anticsrf" value="true" />
                        </form>
                    </div>
                    <div class="ml-form-successBody row-success">
                        <div class="ml-form-successContent">
                            <h4>Thank you!</h4>
                            <p>You have successfully joined our subscriber list.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

