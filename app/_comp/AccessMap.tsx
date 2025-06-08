import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./_ui/card";
import { MapPin } from "lucide-react";

const AccessMap = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">アクセス</h2>
          <p className="text-gray-600">お気軽にお越しください</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card className="bg-white shadow-lg rounded-lg border-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-green-600" />
                  <h1>ながた整骨院</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">住所</h4>
                    <p className="text-gray-600">
                      〒710-0048 岡山県倉敷市福島153-21
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">電話番号</h4>
                    <p className="text-gray-600">086-425-3478</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">最寄り駅</h4>
                    <p className="text-gray-600">山陽本線 倉敷駅 車5分</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">駐車場</h4>
                    <p className="text-gray-600">専用駐車場8台完備</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="min-h-93 bg-gray-200 rounded-lg flex items-center justify-center">
            <iframe
              className="bg-white shadow-lg rounded-lg border-gray-50"
              title="ながた整骨院 地図"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7849217895728!2d133.78294927690862!3d34.609599788093455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355156040d911a51%3A0xdc06dc4e013dd4f0!2z44CSNzEwLTAwNDgg5bKh5bGx55yM5YCJ5pW35biC56aP5bO277yR77yV77yT4oiS77yS77yR!5e0!3m2!1sja!2sjp!4v1748357355524!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessMap;
