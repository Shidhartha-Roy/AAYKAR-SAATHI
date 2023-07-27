package com.sid.itcodeapi.controller;

import com.sid.itcodeapi.model.ItcodeModel;
import com.sid.itcodeapi.services.ItcodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/aaykarsaathi/")
public class ITcodeController {

    @Autowired
    private ItcodeService itcodeService;

    public ITcodeController(ItcodeService itcodeService) {
        this.itcodeService = itcodeService;
    }

    @GetMapping("/result/{id}")
    public ResponseEntity<ItcodeModel> getItcodeById(@PathVariable String id){
        ItcodeModel itcodeModel = null;
        itcodeModel = itcodeService.getCodeById(id);
        return ResponseEntity.ok(itcodeModel);
    }
}
