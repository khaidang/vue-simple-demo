<template>
    <div class="page">
        <div class="container section-cus slideUp">
            <h1 class="text-center f2-l fw6">Contact Us</h1>
            <form class="w-60-l center">
                <div class="form-group row">
                    <label  class="col-sm-3 col-form-label f4-l">Name</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control form-control-lg" id="name" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label f4-l">Company</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control form-control-lg" id="company" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label f4-l">Email</label>
                    <div class="col-sm-9">
                        <input type="email" class="form-control form-control-lg" id="inputEmail3" />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label f4-l">Message</label>
                    <div class="col-sm-9">
                        <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="d-none d-md-block col-sm-3 col-form-label">&nbsp;</label>
                    <div class="col-sm-9">
                        <button type="submit" class="f4 bw0 link dim ph3 pv2 mb2 dib white bg-orange-cus">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact'
}
</script>

