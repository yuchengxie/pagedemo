$(function () {

        $('#search').click(function () {
            var s = $('#inputContent')[ 0 ].value;
            if (validate(s)) {
                //区块高度
                self.location = 'blockinfo.html?hi=' + s;
            } else {
                //地址
                self.location = 'account.html?account=' + s;
            }
        })

        function validate(obj) {
            return /^[0-9]*$/.test(obj);
        }

    }
)

