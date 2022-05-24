import Debug "mo:base/Debug";
import Int "mo:base/Int";
import Text "mo:base/Text";
import TrieMap "mo:base/TrieMap";
import Hash "mo:base/Hash";

actor {

    public type Insurance = {
        isActive : Int;
        companyName : Text;
        coinsurance : Int;
        deductible : Int;
    };

    public type Claim = {
        isActive : Int;
        hospitalName : Text;
        cause : Text;
        amount : Int;
    };

    class User() {
        var insuranceDetails : Insurance = {
            isActive = 0;
            companyName = "";
            deductible = 0;
            coinsurance = 0;
        };

        var insuranceClaim : Claim = {
            isActive = 0;
            hospitalName = "";
            cause = "";
            amount = 0;
        };

        public func hasInsurance() : Int {
            return insuranceDetails.isActive;
        };

        public func buyInsurance(insurance : Insurance) {
            if (hasInsurance() == 1) return;
            insuranceDetails := insurance;
        };

        public func getInsurance() : Insurance {
            if (hasInsurance() == 0) return {
                isActive = 0;
                companyName = "";
                deductible = 0;
                coinsurance = 0;
            };
            return insuranceDetails;
        };

        public func hasClaimed() : Int {
            return insuranceClaim.isActive;
        };

        public func claimInsurance(claim : Claim) {
            if (hasInsurance() == 0) return;
            if (hasClaimed() == 1) return;
            insuranceClaim := claim;
        };

        public func removeClaim() {
            insuranceClaim := {
                isActive = 0;
                hospitalName = "";
                cause = "";
                amount = 0;
            };
        };

        public func getClaim() : Claim {
            return insuranceClaim;
        };
    };

    var users = TrieMap.TrieMap<Text, User>(Text.equal, Text.hash);

    public func addUser(name : Text) {
        users.put(name, User());
    };

    public func buyInsurance(name : Text, deductible1 : Int, coinsurance1 : Int, companyName1 : Text) {
        switch (users.get(name)) {
            case null {return};
            case (?user) {
                let insurance: Insurance = {
                    isActive = 1;
                    companyName = companyName1;
                    deductible = deductible1;
                    coinsurance = coinsurance1;
                };
                user.buyInsurance(insurance);
                users.put(name, user);
            };
        };
    };

    public query func getInsurance(name : Text) : async Insurance {
        switch (users.get(name)) {
            case null return {
                isActive = 0;
                companyName = "";
                deductible = 0;
                coinsurance = 0;
            };
            case (?user) {
                return user.getInsurance();
            };
        };
    };

    public query func hasInsurance(name : Text) : async Int {
        switch (users.get(name)) {
            case null {return 0};
            case (?user) {
                return user.hasInsurance();
            };
        };
    };

    public func addClaim(name : Text, hospitalName1 : Text, cause1 :Text, amount1 : Int) {
        switch (users.get(name)) {
            case null {return};
            case (?user) {
                let claim: Claim = {
                    isActive = 1;
                    hospitalName = hospitalName1;
                    cause = cause1;
                    amount = amount1;
                };
                user.claimInsurance(claim);
                users.put(name, user);
            };
        };
    };

    public func removeClaim(name : Text) {
        switch (users.get(name)) {
            case null {return};
            case (?user) {
                user.removeClaim();
                users.put(name, user);
            };
        };
    };

    public query func getClaim(name : Text) : async Claim {
        switch (users.get(name)) {
            case null return {
                isActive = 0;
                hospitalName = "";
                cause = "";
                amount = 0;
            };
            case (?user) {
                return user.getClaim();
            };
        };
    };

    public query func hasClaimed(name : Text) : async Int {
        switch (users.get(name)) {
            case null {return 0};
            case (?user) {
                return user.hasClaimed();
            };
        };
    };
};
