import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./_ui/card";
import { Clock, Phone } from "lucide-react";

const BusinessHours = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white shadow-lg rounded-lg border-gray-50">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Clock className="h-6 w-6 mr-2 text-green-600" />
                <h2 className="text-2xl">診療時間のご案内</h2>
              </CardTitle>
              <p className="text-gray-600 text-center mt-2">
                診療時間の10分前を目安にご来院ください。
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="font-medium">月・火・木・金</span>
                  <span>8:30-12:30 / 15:00-19:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="font-medium">水・土</span>
                  <span>8:30-12:30 / 15:00-（実費診療）</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-300">
                  <span className="font-medium">日・祝</span>
                  <span className="text-red-600">休診</span>
                </div>
              </div>
              <div className="mt-6 flex flex-col items-center gap-2">
                <p className="text-gray-600 text-center mt-2">
                  予約優先での診療を行っております。お気軽にご連絡ください。
                </p>
                <div className="flex items-center justify-center mb-4">
                  <Phone className="h-5 w-5 mr-2 text-green-600" />
                  <span className="text-xl font-bold text-green-700">
                    086-425-3478
                  </span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded text-center">
                <strong>お知らせ：</strong>直近のお知らせはありません。
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
